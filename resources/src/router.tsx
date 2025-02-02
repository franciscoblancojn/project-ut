import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageLogin } from '@/pages/auth/login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../../styles/index.css';
import { PageHome } from './pages';
import { PageUser } from './pages/user';
import { URL } from '@/url';
import { PageRegister } from './pages/auth/register';
import { PageForgotPassword } from './pages/auth/forgot-password';
import { PageUserSingle } from './pages/user/single';
import { PageTransaction } from './pages/transaction';
import { PageTransactionSingle } from './pages/transaction/single';
import { NotificationPop } from 'fenextjs';

export const AppRouter = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <NotificationPop />
            <BrowserRouter>
                <Routes>
                    <Route path={URL.home.index}>
                        <Route index element={<PageHome />} />
                        <Route path={URL.dashboard.index}>
                            <Route index element={<PageHome />} />
                            <Route path={URL.dashboard.user.path}>
                                <Route index element={<PageUser />} />
                                <Route
                                    path=":id"
                                    element={<PageUserSingle />}
                                />
                            </Route>
                            <Route path={URL.dashboard.transaction.path}>
                                <Route index element={<PageTransaction />} />
                                <Route
                                    path=":id"
                                    element={<PageTransactionSingle />}
                                />
                            </Route>
                        </Route>
                        <Route path={URL.auth.index}>
                            <Route index element={<PageLogin />} />
                            <Route
                                path={URL.auth.login.path}
                                element={<PageLogin />}
                            />
                            <Route
                                path={URL.auth.register.path}
                                element={<PageRegister />}
                            />
                            <Route
                                path={URL.auth['forgot-password'].path}
                                element={<PageForgotPassword />}
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
};
