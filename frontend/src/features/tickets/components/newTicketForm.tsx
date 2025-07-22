/* eslint-disable no-console */
import { initMercadoPago } from "@mercadopago/sdk-react";
import { IPaymentBrickCustomization } from "@mercadopago/sdk-react/esm/bricks/payment/type";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Form, Formik } from "formik";
import { ChevronDownIcon, Send, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useWizard } from "react-use-wizard";
import { toast } from "sonner";

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

import { newTicketApi } from "../api/newTicketApi";
import { NewTicket, TicketStatus } from "../types/tickets";
import { newTicketValidation } from "../validation/newTicketValidation";
declare global {
  interface Window {
    paymentBrickController?: {
      unmount: () => void;
    };
  }
}

export default function NewTicketForm({
  setOpen,
  price,
}: {
  setOpen: (open: boolean) => void;
  price: number;
}) {
  const [openBirthdate, setOpenBirthDate] = useState(false);
  const [openStateSelect, setOpenStateSelect] = useState(false);
  const wizardController = useWizard();

  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_TEST_PUBLIC_KEY || "");

    return () => {
      window.paymentBrickController.unmount();
    };
  }, []);

  const initialization = useMemo(
    () => ({
      amount: price,
      preferenceId: "your_preference_id_here",
    }),
    [price],
  );

  const customization: IPaymentBrickCustomization = useMemo(
    () => ({
      paymentMethods: {
        ticket: "all",
        bankTransfer: "all",
        creditCard: "all",
        prepaidCard: "all",
        debitCard: "all",
        mercadoPago: "all",
      },
    }),
    [],
  );

  console.log("initialization", initialization);
  console.log("customization", customization);
  console.log(wizardController);

  //   const onSubmit = async ({ selectedPaymentMethod, formData }) => {
  //     // callback chamado ao clicar no botão de submissão dos dados
  //     return new Promise((resolve, reject) => {
  //       fetch("/process_payment", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       })
  //         .then((response) => response.json())
  //         .then((response) => {
  //           // receber o resultado do pagamento
  //           resolve();
  //         })
  //         .catch((error) => {
  //           // lidar com a resposta de erro ao tentar criar o pagamento
  //           reject();
  //         });
  //     });
  //   };

  //   const onError = async (error) => {
  //     // callback chamado para todos os casos de erro do Brick
  //     console.log(error);
  //   };
  //   const onReady = async () => {
  //     /*
  //    Callback chamado quando o Brick estiver pronto.
  //    Aqui você pode ocultar loadings do seu site, por exemplo.
  //  */
  //   };

  const initialValues: NewTicket = {
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    birthdate: 0,
    status: TicketStatus.waiting_payment,
    singleUse: false,
    used: false,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={newTicketValidation}
      onSubmit={async (values) => {
        const { error } = await newTicketApi({
          ...values,
        });

        if (error) {
          return toast.error("Erro", {
            description: error,
          });
        }

        toast.success("Sucesso", {
          description: "Formulário enviado com sucesso",
        });
        return;
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

          <div>
            {/* <Payment
              initialization={initialization}
              customization={customization}
              onSubmit={(onSubmit)}
              onReady={onReady}
              onError={onError}
            /> */}
          </div>

          <div className="flex gap-4 self-end">
            <Button variant="destructive" onClick={() => setOpen(false)}>
              <X className="mr-2 h-4 w-4" />
              Cancelar
            </Button>
            <Button
              loading={isSubmitting}
              className="ml-auto w-fit"
              type="submit"
              variant="success"
              disabled={Object.keys(errors).length > 0}
            >
              <Send className="mr-2 h-4 w-4" />
              Enviar
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
