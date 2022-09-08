import { Helper } from './helper';

export function BubbleSort(array)
{
    const animations=[];
    let counter = 0;
    let isSorted = false;
    let i = 0;
    while (!isSorted)
    {
        isSorted = true;
        for (i = 0;i < array.length-1-counter;i++) //We dont want to go over the sorted item which will be at the end index.
		{
            animations.push([i, i+1]);
            if(array[i] > array[i+1])
            {
                animations.push([i, i+1]);
                Helper(i, i + 1, array);
                isSorted = false;
            }
            else{
                animations.push([i, i]);
            }
            animations.push([i, i+1]);
		}
		counter += 1;
    }
    return animations;
}

