/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    extend: {
      backgroundImage: {
        "radial-gradient": "radial-gradient(hsl(var(--background)) #efefef)",
        "transparent-radial-gradient":
          "radial-gradient(hsl(var(--background) / 0) #efefef)"
      },
      spacing: {
        viewport: "calc(100vh - 104px)"
      },
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
        },
        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          foreground: "hsl(var(--success-foreground) / <alpha-value>)"
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          "50": "hsl(138 62% 96%)",
          "100": "hsl(134 61% 90%)",
          "200": "hsl(137 60% 80%)",
          "300": "hsl(141 56% 67%)",
          "400": "hsl(143 50% 52%)",
          "500": "hsl(146 65% 39%)",
          "600": "hsl(147 73% 33%)",
          "700": "hsl(148 73% 24%)",
          "800": "hsl(149 68% 20%)",
          "900": "hsl(149 67% 16%)",
          "950": "hsl(152 70% 9%)"
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)"
        },
        light: {
          DEFAULT: "hsl(var(--light) / <alpha-value>)",
          foreground: "hsl(var(--light-foreground) / <alpha-value>)"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: {
            height: "var(--radix-accordion-content-height)"
          }
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)"
          },
          to: { height: 0 }
        },
        pann: {
          from: {
            translate: "0% 0%"
          },
          to: {
            translate: "50% 25%"
          }
        },
        "collapsible-down": {
          from: {
            height: 0
          },
          to: {
            height: "var(--radix-collapsible-content-height)"
          }
        },
        "collapsible-up": {
          from: {
            height: "var(--radix-collapsible-content-height)"
          },
          to: {
            height: 0
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pan: "pann 180s linear infinite",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out"
      },
      screens: {
        "2xl": "2000px",
        mobileS: { max: "320px" }
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
}
