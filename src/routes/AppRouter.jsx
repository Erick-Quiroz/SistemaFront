import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { AdminPage, CartPage, CategoryCreatePage, CategoryPage, HomePage, OfferPage, ProductCreatePage, ProductoPage, ProductPage, ProveedorCreatePage, ProveedoresPage, RegisterPage, StockPage, LoginPage, FilterPage } from '../pages'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <h1>error</h1>
    },
    {
        path: '/productos/:productID',
        element: <ProductoPage />,
        errorElement: <h1>error</h1>
    },
    {
        path: '/admin',
        element: <AdminPage />,
        errorElement: <h1>error</h1>
    },
    {
        path: '/admin/categorias',
        element: <CategoryPage />,
        errorElement: <h1>error</h1>
    },
    {
        path: '/admin/productos',
        element: <ProductPage />,
        errorElement: <h1>error</h1>
    },
    {
        path: '/admin/proveedors',
        element: <ProveedoresPage />,
        errorElement: <h1>error</h1>
    },
    {
        path: '/admin/registro/producto',
        element: <ProductCreatePage />,
        errorElement: <h1>error</h1>
    },
    {
        path: '/admin/registro/categoria',
        element: <CategoryCreatePage />,
        errorElement: <h1>error</h1>
    },
    {
        path: '/admin/ofertas',
        element: <OfferPage />,
        errorElement: <h1>error</h1>
    },

    {
        path: '/admin/registro/proveedor',
        element: <ProveedorCreatePage />,
        errorElement: <h1>error</h1>
    },

    {
        path: '/admin/Stock',
        element: <StockPage />,
        errorElement: <h1>error</h1>
    },

    {
        path: '/cart',
        element: <CartPage />,
        errorElement: <h1>error</h1>
    },

    {
        path: '/register',
        element: <RegisterPage />,
        errorElement: <h1>error</h1>
    },
    {
        path: '/Login',
        element: <LoginPage/>,
        errorElement: <h1>error</h1>

    },
    {
        path: '/Filter/:categoria',
        element: <FilterPage />,
        errorElement: <h1>error</h1>,
    },
])

export const AppRouter = () => {
    return <RouterProvider router={router} />
}
