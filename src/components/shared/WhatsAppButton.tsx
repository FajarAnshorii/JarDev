"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

export function WhatsAppButton({
  phoneNumber = "628990415500",
  message = "Halo, saya tertarik dengan jasa pembuatan website dari JarDev Builder!",
  className,
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      className={cn("fixed bottom-6 right-6 z-50", className)}
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          "relative flex items-center justify-center w-14 h-14 rounded-full",
          "bg-green-500 hover:bg-green-600",
          "shadow-lg hover:shadow-xl",
          "transition-colors duration-200",
          "group"
        )}
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />

        {/* Icon */}
        <MessageCircle className="w-7 h-7 text-white relative z-10" />

        {/* Glow Effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
      </motion.a>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-popover border border-border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
          <p className="text-sm font-medium text-popover-foreground">Chat WhatsApp</p>
          <p className="text-xs text-muted-foreground">Respons cepat 24/7</p>
        </div>
      </div>
    </motion.div>
  );
}
