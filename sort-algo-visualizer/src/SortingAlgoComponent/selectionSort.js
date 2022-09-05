import { Helper } from './helper';

export function SelectionSort(array)
{
    let currIndex = 0;
    while(currIndex < array.length -1)
    {
        var smallestIndx = currIndex;
        for (let i = currIndex + 1; i < array.length; i++)
        {
            if(array[smallestIndx] > array[i])
            {
                smallestIndx = i; 
            }
        }
        Helper(currIndex, smallestIndx, array);
        currIndex += 1;
    }
    return array;
}