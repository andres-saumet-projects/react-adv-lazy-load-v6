import { lazy, LazyExoticComponent } from 'react';


// Components:
import { NoLazy } from '../01-lazyload/pages/NoLazy';



type JSXComponent = ()=>JSX.Element;

interface RoutesProps {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}


// Implementación de Lazy Load o carga Perezosa de componentes o modulos:
const LazyLayout = lazy(()=> import(/* webpackChunkName: "LazyLayout"*/ '../01-lazyload/layout/LazyLayout'));


export const routes: RoutesProps[] = [
    {
        // Este es un modulo que carga sus rutas hijas por lazy load:
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy Layout',
    },
    {
        // Este modulo o componente no se carga por lazy load se carga de manera tradicional:
        to: '/no-lazy',
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy',
    },
];