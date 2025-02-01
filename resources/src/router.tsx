
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageLogin } from "@/pages/auth/login";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../../styles/index.css';
import PageHome from "./pages";
import PageUser from "./pages/user";
import { LayoutAuth } from "./layout/Auth";
import PageClient from "./pages/client";
import { URL } from "@/url";
import PageRegister from "./pages/auth/register";
import PageForgotPassword from "./pages/auth/forgot-password";

export const AppRouter = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path={URL.home.index}  >
                        <Route path={URL.dashboard.index} element={<LayoutAuth />} >
                            <Route index element={<PageHome />} />
                            <Route path={URL.dashboard.user.path} element={<PageUser />} />
                            <Route path={URL.dashboard.client.path} element={<PageClient />} />
                        </Route>
                        <Route path={URL.auth.index}>
                            <Route index element={<PageLogin />} />
                            <Route path={URL.auth.login.path} element={<PageLogin />} />
                            <Route path={URL.auth.register.path} element={<PageRegister />} />
                            <Route path={URL.auth["forgot-password"].path} element={<PageForgotPassword />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}