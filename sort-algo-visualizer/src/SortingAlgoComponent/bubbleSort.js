import { Helper } from './helper';

export function BubbleSort(array)
{
    var result = {};
    result = array;

    let counter = 0;
    let isSorted = false;
    let i = 0;
    while (!isSorted)
    {
        isSorted = true;
        for (i = 0;i < result.length-1-counter;i++) //We dont want to go over the sorted item which will be at the end index.
		{
            if(result[i] > result[i+1])
            {
                Helper(i, i + 1, result);
                isSorted = false;
            }
		}
		counter += 1;
    }
    console.log(result);
    return result;
}

