// ====================== O-большое ======================
// Принцип измерения О-большого
// Алгоритм с времнной сложностью О(1) - это константное время
// Функция всегда возвращает первое число списка

// function getFirstItem(items) {
//   // Завжди виконується одна операція, незалежно від розміру списку
//   return items[0];
// }

// console.log(getFirstItem([1, 2, 3, 4, 5]));

// ====================== O(n) ======================

// Алгоритм с временной сложностью О(n) проходит по списку чисел печатает каждое число
// каждое число в списке обрабатывается один раз

// function printAllItems(items) {
//   for (const item of items) {
//     //колличество операций пропорциональная количеству элементов в списке
//     console.log(item);
//   }
// }
// printAllItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// ====================== O(n2) ======================
// Сортировка вставкой, необходимо отсортировать миссив в порядке возростания или наоборот

// function insertioSort(arr) {
//   const n = arr.length;
//   for (let i = 1; i < n; i++) {
//     const key = arr[i];
//     let j = i - 1;
//     console.log(`i=${i}, key=${key}, начальное arr: ${arr}`);
//     while (j >= 0 && key < arr[j]) {
//       console.log(`  j=${j}, arr[j]=${arr[j]}, arr до сдвига: ${arr}`);
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//     console.log(`  вставка key, arr после вставки: ${arr}`);
//   }
// }
// const numbers = [12, 11, 13, 5, 6];
// insertioSort(numbers);
// console.log("Отсортированный массив", numbers);

// ====================== O(n3) ======================

function multiplyMatrices(A, B) {
  const n = A.length;
  const C = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    console.log("i", i);
    for (let j = 0; j < n; j++) {
      console.log("j", j);
      for (let k = 0; k < n; k++) {
        console.log("k", k);
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return C;
}

const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const B = [
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
];

console.log(multiplyMatrices(A, B));

//=====================================================
// Пространственная сложность алгоритма O(1)

// Алгоритм использует постоянный объем памяти,
// вне зависимости от размера входных данных.
// Например, получение элемента из массива по индексу:

// function getItemByIndex(items, index) {
//   return items[index];
// }

// const items = [1, 2, 3, 4, 5, 6, 7];
// const index = 5;
// console.log(getItemByIndex(items, index));
//======================================================
// Пространственная сложность O(n)

// Алгоритм использует объем памяти,
// пропорциональный размеру входных данных.
// Это часто случается, когда мы создаем копию входных данных или сохраняем
// промежуточные результаты. Например, операция обращения списка:

// function reverseList(items) {
//   return items.slice().reverse(); // создаём копию и меняем масив
// }
// const originalList = [1, 2, 3, 4, 5];
// const reversedList = reverseList(originalList);
// console.log(reversedList);

//======================================================
// Пространственная сложность O(n3)

//Алгоритм использует объем памяти,
// пропорциональный квадрату размера входных данных.
// Это часто случается при работе с динамично создаваемыми массивами.
// Например, создание списка всех пар элементов:

// function generatePairs(items) {
//   const pairs = [];

//   for (let i = 0; i < items.length; i++) {
//     for (let j = i + 1; j < items.length; j++) {
//       pairs.push([items[i], items[j]]);
//     }
//   }
//   return pairs;
// }

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 0, 12, 34, 56, 678];
// console.log(generatePairs(items));
//======================= Структура данных ===========================

// const set1 = new Set([1, 2, 3, 4, 5]);
// const set2 = new Set([4, 5, 6, 7, 8]);

// // Об'єднання
// const unionSet = new Set([...set1, ...set2]);
// console.log("Объединение", unionSet); // Вивід: Set { 1, 2, 3, 4, 5, 6, 7, 8 }

// // Перетин
// const intersectionSet = new Set([...set1].filter((x) => set2.has(x)));
// console.log("Пересечение", intersectionSet); // Вивід: Set { 4, 5 }

// // Різниця
// const differenceSet = new Set([...set1].filter((x) => !set2.has(x)));
// console.log("Разница", differenceSet); // Вивід: Set { 1, 2, 3 }

// // Симетрична різниця
// const symmetricDifferenceSet = new Set(
//   [...set1]
//     .filter((x) => !set2.has(x))
//     .concat([...set2].filter((x) => !set1.has(x)))
// );
// console.log("Симетричная разница", symmetricDifferenceSet); // Вивід: Set { 1, 2, 3, 6, 7, 8 }

//=================== Стек ===============================

function peek(stack) {
  return stack[stack.length - 1];
}
const stack = ["a", "b", "c", "d"];
// console.log(peek(stack)); // Вивід: 'b'
