/**
 * Capitaliza a primeira letra de uma string
 * @param text - O texto a ser capitalizado
 * @returns O texto com a primeira letra em maiúsculo
 */
export const capitalizeText = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}; 