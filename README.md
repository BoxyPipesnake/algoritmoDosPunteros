# Algoritmo de los "Dos Punteros" en JavaScript

Este ejercicio muestra dos ejemplos de cómo utilizar el algoritmo de los **Dos punteros**:

## 📌 Ejemplo 1: Buscar una suma objetivo en un arreglo

La función `encontrarParDeNumeros` toma un arreglo de números ordenado y un número objetivo (`target`). Luego, usa dos punteros (uno al inicio y otro al final) para buscar si hay algún par de números cuya suma sea igual al número objetivo.

🔁 Los punteros se mueven hacia el centro dependiendo de si la suma actual es menor o mayor al objetivo.

🧠 Este enfoque es eficiente porque evita el uso de bucles anidados, lo que mejora el rendimiento.

## 📌 Ejemplo 2: Verificar si un texto es un palíndromo

La función `esPalindromo` evalúa si una palabra o frase se lee igual al derecho que al revés.

🔍 Para hacerlo:
- Convierte el texto a minúsculas.
- Elimina los espacios.
- Compara letras desde los extremos hacia el centro usando dos punteros.

✅ Si todas las letras coinciden, el texto es un palíndromo.  
❌ Si encuentra una diferencia, se detiene y lo marca como no palíndromo.

---

## ✨ ¿Qué es la técnica de dos punteros?

Es una forma de recorrer estructuras de datos usando dos variables que se mueven desde extremos opuestos hacia el centro, ideal para resolver problemas de búsqueda o comparación de forma eficiente.

---

## 🧪 Ejemplos de prueba incluidos

- `esPalindromo('anita lava la tina')` ➝ ✅
- `esPalindromo('Hola mundo')` ➝ ❌
- `encontrarParDeNumeros([1,2,3,4,5,6,7,8,9], 1000)` ➝ ❌ (no hay combinación posible)

