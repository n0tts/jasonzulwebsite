/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#0e2442',
                secondary: '#0077b6',
                accent: '#ffffff',
            },
            fontFamily: {
                display: ['Playfair Display', ...defaultTheme.fontFamily.serif],
                body: ['Inter', ...defaultTheme.fontFamily.sans],
                mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
            },
            fontSize: {
                'sm': 'var(--text-sm)',
                'base': 'var(--text-base)',
                'md': 'var(--text-md)',
                'lg': 'var(--text-lg)',
                'xl': 'var(--text-xl)',
                '2xl': 'var(--text-2xl)',
                '3xl': 'var(--text-3xl)',
                '4xl': 'var(--text-4xl)',
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '30': '7.5rem',
                '36': '9rem',
            },
            borderRadius: {
                'none': '0px',
                'sm': '0.125rem',
                DEFAULT: '0.25rem',
                'md': '0.375rem',
                'lg': '0.5rem',
                'full': '9999px',
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        fontFamily: theme('fontFamily.body'),
                        color: theme('colors.gray.800'),
                        lineHeight: '1.75',
                        a: {
                            color: theme('colors.secondary'),
                            textDecoration: 'underline',
                            fontWeight: '500',
                            '&:hover': {
                                color: theme('colors.primary'),
                            },
                        },
                        h1: {
                            fontFamily: theme('fontFamily.display'),
                            color: theme('colors.primary'),
                            fontWeight: '600',
                            letterSpacing: '0.02em',
                            lineHeight: '1.1',
                        },
                        'h2, h3, h4': {
                            fontFamily: theme('fontFamily.display'),
                            color: theme('colors.primary'),
                            fontWeight: '600',
                            lineHeight: '1.2',
                        },
                        code: {
                            fontFamily: theme('fontFamily.mono'),
                            backgroundColor: theme('colors.gray.100'),
                            padding: '0.2em 0.4em',
                            borderRadius: '0.25rem',
                            fontWeight: '400',
                        },
                        blockquote: {
                            fontStyle: 'italic',
                            borderLeftColor: theme('colors.secondary'),
                            color: theme('colors.gray.600'),
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        import('@tailwindcss/typography'),
        import('@tailwindcss/forms'),
    ],
}
