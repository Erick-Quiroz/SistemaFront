import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { VentasPage, CartPage, AdminPage, CategoryCreatePage, CategoryPage, HomePage, ProductCreatePage, ProductPage, ProveedorCreatePage, ProveedoresPage, OfferPage, StockPage } from '../pages'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
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
        path: '/admin/Ventas',
        element: <VentasPage />,
        errorElement: <h1>error</h1>
    },

    {
        path: '/cart',
        element: <CartPage />,
        errorElement: <h1>error</h1>
    }
])

export const AppRouter = () => {
    return <RouterProvider router={router} />
}
