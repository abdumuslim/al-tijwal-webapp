
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Cairo', 'sans-serif'],
				cairo: ['Cairo', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				tijwal: {
					blue: '#007BFF',
					orange: '#FF7F00',
					light: '#F8F9FA',
					dark: '#212529',
					gray: '#6C757D'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'background-shine': {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' },
				},
				    'throb-pulse': {
				      '0%,100%': { transform: 'scale(1)', opacity: '1' },
				      '50%':    { transform: 'scale(1.15)', opacity: '0.7' },
				    },
				    'opacity-pulse-strong': {
				      '0%,100%': { opacity: '1' },
				      '50%':     { opacity: '0.3' },
				    },
				    'dot-typing': {
				      '0%,100%':            { opacity: '0.3' },
				      'calc(var(--dot-delay)*1%)': { opacity: '1' },
				    },
				    'neural-scan': {
				      '0%': { backgroundPosition: '-100% 0%' },
				      '100%': { backgroundPosition: '100% 0%' },
				    },
				    'synapse-spark': {
				      '0%, 100%': { transform: 'scale(0)', opacity: '0' },
				      '50%': { transform: 'scale(1.2)', opacity: '1' },
				      '75%': { transform: 'scale(0.8)', opacity: '0.5' },
				    },
				    'brain-glow-effect': {
				      '0%, 100%': { 'box-shadow': '0 0 0px 0px hsla(var(--primary-hsl), 0.2)' },
				      '50%':      { 'box-shadow': '0 0 8px 4px hsla(var(--primary-hsl), 0.4)' },
				    },
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-in-right': 'fade-in-right 0.7s ease-out',
				'fade-in-left': 'fade-in-left 0.7s ease-out',
				'scale-in': 'scale-in 0.7s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
				'background-shine': 'background-shine 8s linear infinite',
				    'throb-pulse':          'throb-pulse var(--pulse-duration,1.5s) var(--pulse-ease,cubic-bezier(0.4,0,0.6,1)) infinite',
				    'opacity-pulse-strong': 'opacity-pulse-strong var(--pulse-duration,1.5s) var(--pulse-ease,cubic-bezier(0.4,0,0.6,1)) infinite',
				    'dot-typing':           'dot-typing var(--typing-duration,1.4s) var(--typing-ease,linear) infinite',
				    'neural-scan':          'neural-scan var(--scan-duration, 1.5s) var(--scan-ease, linear) infinite',
				    'synapse-spark':        'synapse-spark var(--spark-duration, 0.8s) var(--spark-ease, ease-out) infinite',
				    'brain-glow':           'opacity-pulse-strong var(--pulse-duration, 1.5s) var(--pulse-ease, cubic-bezier(0.4,0,0.6,1)) infinite, brain-glow-effect var(--glow-duration, 1.5s) var(--glow-ease, ease-in-out) infinite',
			}
		}
	},
        plugins: [animate, typography],
} satisfies Config;
