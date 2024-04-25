import React from 'react'

import {ComponentType, LazyExoticComponent, ReactNode} from 'react'

// Этот тип предназначен для компонентов, которые вы хотите обернуть
type LazyComponentType = LazyExoticComponent<ComponentType<any>>;

// Эти пропсы будут переданы в LazyWrapper
interface LazyWrapperProps {
    component: LazyComponentType; // Лениво загружаемый компонент
    fallback: NonNullable<ReactNode> | null; // Элемент, который будет отображаться во время загрузки
}

// Обертка для лениво загружаемого компонента с Suspense
export const LazyWrapper: React.FC<LazyWrapperProps> = ({component: Component, fallback}) => {
    return (
        <React.Suspense fallback={fallback}>
            <Component/>
        </React.Suspense>
    )
}