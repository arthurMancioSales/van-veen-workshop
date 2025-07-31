"use client";
import jsQR from "jsqr";
import { QrCode, Camera, RotateCcw, XCircle } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function QrScannerPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  const stopScanner = useCallback(() => {
    if (videoRef.current && videoRef.current.srcObject) {
      (videoRef.current.srcObject as MediaStream)
        .getTracks()
        .forEach((track) => track.stop());
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setIsScanning(false);
  }, []);

  const tick = useCallback(() => {
    if (!videoRef.current || !canvasRef.current || !isScanning) {
      return;
    }

    if (videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert",
        });

        if (code) {
          setScannedData(code.data);
          stopScanner(); // Para o scanner após encontrar um QR code
          return; // Sai da função para não agendar o próximo frame
        }
      }
    }
    animationFrameRef.current = requestAnimationFrame(tick);
  }, [isScanning, stopScanner]);

  const startScanner = useCallback(async () => {
    setLoading(true);
    setError(null);
    setScannedData(null);
    setIsScanning(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute("playsinline", "true"); // Necessário para iOS
        await videoRef.current.play();
        setLoading(false);
        tick(); // Inicia o loop de escaneamento
      }
    } catch {
      setError("Não foi possível acessar a câmera. Verifique as permissões.");
      setLoading(false);
      setIsScanning(false);
    }
  }, [tick]);

  useEffect(() => {
    // Inicia o scanner automaticamente ao carregar a página
    startScanner();

    return () => {
      stopScanner();
    };
  }, [startScanner, stopScanner]);

  const handleRescan = () => {
    startScanner();
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-950 p-6 text-gray-50">
      <Card className="w-full max-w-2xl border border-gray-700 bg-gray-900 text-center shadow-lg">
        <CardHeader>
          <QrCode className="mx-auto mb-4 h-12 w-12 text-purple-400" />
          <CardTitle className="text-3xl font-bold text-white">
            Scanner de QR Code
          </CardTitle>
          <p className="text-gray-400">Aponte sua câmera para um QR Code.</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border border-gray-700 bg-gray-800">
            {loading && (
              <div className="flex items-center gap-2 text-lg text-gray-400">
                <Camera className="h-6 w-6 animate-pulse" />
                Carregando câmera...
              </div>
            )}
            {error && (
              <div className="flex items-center gap-2 text-lg text-red-400">
                <XCircle className="h-6 w-6" />
                {error}
              </div>
            )}
            {!loading && !error && (
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                playsInline
                muted
              />
            )}
            {/* Canvas é usado para processamento, mas pode ser oculto */}
            <canvas ref={canvasRef} className="hidden" />
          </div>

          {scannedData && (
            <div className="mt-6 rounded-lg border border-gray-700 bg-gray-800 p-4 text-left">
              <h3 className="mb-2 text-xl font-semibold text-white">
                Informações do QR Code:
              </h3>
              <p className="break-words text-gray-300">{scannedData}</p>
            </div>
          )}

          <div className="mt-6 flex justify-center gap-4">
            {scannedData ? (
              <Button
                onClick={handleRescan}
                className="h-12 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-700 text-lg font-bold text-white shadow-lg transition-all hover:from-purple-700 hover:to-indigo-800"
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                Escanear Novamente
              </Button>
            ) : (
              <Button
                onClick={startScanner}
                disabled={isScanning || loading}
                className="h-12 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-700 text-lg font-bold text-white shadow-lg transition-all hover:from-purple-700 hover:to-indigo-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Camera className="mr-2 h-5 w-5" />
                {loading ? "Iniciando Câmera..." : "Iniciar Scanner"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
