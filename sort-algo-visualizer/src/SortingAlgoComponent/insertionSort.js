import { Helper } from './helper';

export function InsertionSort(array)
{
    for (let i = 1; i < array.length; i++)
    {
        let j = i;
        while (j > 0 && array[j] < array[j-1])
        {
            Helper(j - 1,j,  array);
            j -= 1;
        }
    }
    return array;
}