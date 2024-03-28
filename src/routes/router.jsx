import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/home_page';
import { FormPage } from '../pages/form_page';
import { MesurePage } from '../pages/mesure_page';


export const TheRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage></HomePage>,
    },
    {
        path: "/saisie",
        element: <FormPage></FormPage>
    },
    {
        path: "/mesure",
        element: <MesurePage></MesurePage>
    }
]);