import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: [
    // защищённые маршруты
    '/dashboard(.*)',
    '/profile(.*)',
    // API маршруты
    '/(api|trpc)(.*)',
    // Игнорировать внутренние и статические файлы
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
}
