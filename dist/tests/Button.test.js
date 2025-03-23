// tests/Button.test.ts
import fs from 'fs';
import path from 'path';
describe('Componente Button gerado', () => {
    const filePath = path.resolve('src/components/Button.js');
    it('existe e está salvo corretamente', () => {
        const exists = fs.existsSync(filePath);
        expect(exists).toBe(true);
    });
    it('contém a palavra Button e props esperadas', () => {
        const content = fs.readFileSync(filePath, 'utf8');
        expect(content).toMatch(/function Button|const Button/);
        expect(content).toMatch(/text/);
        expect(content).toMatch(/onPress/);
        expect(content).toMatch(/backgroundColor/);
    });
});
