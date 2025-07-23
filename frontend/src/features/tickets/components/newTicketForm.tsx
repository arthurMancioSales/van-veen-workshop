import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Form, Formik } from "formik";
import { ChevronDownIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useWizard } from "react-use-wizard";
import { toast } from "sonner";

import { verifyExistingDocApi } from "@/api/verifyExistingDocApi";
import { StateSelect } from "@/components/stateSelect";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormField,
  FormFieldError,
  FormFieldLabel,
  FormFieldRoot,
} from "@/components/ui/formField";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { NewTicket, TicketStatus } from "../types/tickets";
import { newTicketValidation } from "../validation/newTicketValidation";

export default function NewTicketForm({
  setTicketData,
  newTicketData,
}: {
  setTicketData: (data: NewTicket) => void;
  newTicketData: NewTicket;
}) {
  const [openBirthdate, setOpenBirthDate] = useState(false);
  const [openStateSelect, setOpenStateSelect] = useState(false);
  const wizardController = useWizard();

  const initialValues: NewTicket = {
    name: newTicketData?.name || "",
    email: newTicketData?.email || "",
    phone: newTicketData?.phone || "",
    state: newTicketData?.state || "",
    city: newTicketData?.city || "",
    birthdate: newTicketData?.birthdate || 0,
    status: newTicketData?.status || TicketStatus.in_process,
    singleUse: newTicketData?.singleUse || false,
    used: newTicketData?.used || false,
    payment_id: newTicketData?.payment_id || "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={newTicketValidation}
      onSubmit={async (values) => {
        const response = await verifyExistingDocApi({
          phone: values.phone,
          email: values.email,
          type: "tickets",
        });

        if (response.error) {
          toast.error("Erro", { description: response.error });
          return;
        }

        setTicketData(values);
        wizardController.nextStep();
      }}
    >
      {({ errors, touched, isSubmitting, values, setFieldValue }) => (
        <Form className="flex w-full flex-col gap-4">
          <div className="flex flex-1 flex-col">
            <FormFieldRoot className="w-full">
              <FormFieldLabel htmlFor="name" className="text-sm" required>
                Nome Completo
              </FormFieldLabel>
              <FormField
                type="text"
                id="name"
                name="name"
                error={errors.name}
                touched={touched.name}
                required
              />
              <FormFieldError
                error={errors.name as string}
                touched={!!touched.name}
              />
            </FormFieldRoot>
          </div>

          <div className="flex flex-1 flex-col">
            <FormFieldRoot className="w-full">
              <FormFieldLabel htmlFor="email" className="text-sm" required>
                Email
              </FormFieldLabel>
              <FormField
                type="email"
                id="email"
                name="email"
                error={errors.email}
                touched={touched.email}
                required
              />
              <FormFieldError
                error={errors.email as string}
                touched={!!touched.email}
              />
            </FormFieldRoot>
          </div>

          <div className="flex flex-1 flex-col">
            <FormFieldRoot className="w-full">
              <FormFieldLabel htmlFor="phone" className="text-sm" required>
                Telefone
              </FormFieldLabel>
              <FormField
                type="tel"
                id="phone"
                name="phone"
                error={errors.phone}
                touched={touched.phone}
                required
              />
              <FormFieldError
                error={errors.phone as string}
                touched={!!touched.phone}
              />
            </FormFieldRoot>
          </div>

          <div className="flex flex-1 flex-col">
            <FormFieldRoot className="w-full">
              <FormFieldLabel
                htmlFor="state"
                className="text-sm"
                required
                onClick={() => setOpenStateSelect(true)}
              >
                Estado
              </FormFieldLabel>
              <StateSelect
                open={openStateSelect}
                setOpen={setOpenStateSelect}
                value={values.state}
                onValueChange={(newValue: string) =>
                  setFieldValue("state", newValue)
                }
              />
              <FormFieldError
                error={errors.state as string}
                touched={!!touched.state}
              />
            </FormFieldRoot>
          </div>

          <div className="flex flex-1 flex-col">
            <FormFieldRoot className="w-full">
              <FormFieldLabel htmlFor="city" className="text-sm" required>
                Cidade
              </FormFieldLabel>
              <FormField
                type="string"
                id="city"
                name="city"
                error={errors.city}
                touched={touched.city}
                required
              />
              <FormFieldError
                error={errors.city as string}
                touched={!!touched.city}
              />
            </FormFieldRoot>
          </div>

          <div className="flex flex-1 flex-col">
            <FormFieldRoot className="w-full">
              <FormFieldLabel
                htmlFor="birthdate"
                className="text-sm"
                required
                onClick={() => setOpenBirthDate(true)}
              >
                Data de Nascimento
              </FormFieldLabel>
              <Popover open={openBirthdate} onOpenChange={setOpenBirthDate}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    id="date"
                    className="border border-white bg-gray-900 p-6 text-gray-50"
                  >
                    {values.birthdate > 0
                      ? format(new Date(values.birthdate), "dd/MM/yyyy", {
                          locale: ptBR,
                        })
                      : "Selecione uma data"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    id="birthdate"
                    mode="single"
                    selected={new Date(values.birthdate)}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      setFieldValue("birthdate", date.getTime());
                      setOpenBirthDate(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
              <FormFieldError
                error={errors.birthdate as string}
                touched={!!touched.birthdate}
              />
            </FormFieldRoot>
          </div>

          <div className="flex w-full justify-between gap-4 self-end">
            <Button
              variant="ghost"
              onClick={() => wizardController.previousStep()}
              className="w-fit"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
            <Button
              loading={isSubmitting}
              className="w-fit"
              type="submit"
              variant="ghost"
              disabled={Object.keys(errors).length > 0}
            >
              <ChevronRight className="mr-2 h-4 w-4" />
              Próximo
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
