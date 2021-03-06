import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Hero from '../index';

describe('Hero:', () => {
    const renderComponent = customProps =>
        render(
            <Hero title='Hello World!' {...customProps} />
        );
    
    afterEach(() => {
        cleanup();
    });

    it('Displays a title', () => {
        const { getByTestId } = renderComponent();
        const title = getByTestId('fd-c-hero__title');
        expect(title).toBeDefined();
        expect(title.textContent)
            .toBe('Hello World!');
    });

    it('Can display a subtitle', () => {
        const { getByTestId } = renderComponent({
            subtitle: 'sponsored by FooBar',
        });
        const subtitle = getByTestId('fd-c-hero__subtitle');
        expect(subtitle).toBeDefined();
        expect(subtitle.textContent)
            .toBe('sponsored by FooBar');
    });

    it('Can display a strapline', () => {
        const { getByTestId } = renderComponent({
            strapline: 'it\'s a small world after all',
        });
        const strapline = getByTestId('fd-c-hero__strapline');
        expect(strapline).toBeDefined();
        expect(strapline.textContent)
            .toBe('it\'s a small world after all');
    });
});