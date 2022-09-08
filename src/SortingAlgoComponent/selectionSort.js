import { Helper } from './helper';

export function SelectionSort(array)
{
    const animations=[];
    let currIndex = 0;
    while(currIndex < array.length -1)
    {
        var smallestIndx = currIndex;
        animations.push([currIndex,currIndex,"colchng"]);
        for (let i = currIndex + 1; i < array.length; i++)
        {
            animations.push([i,i,"colchng"]);
            animations.push([i,i,"colrev"]);
            if(array[smallestIndx] > array[i])
            {
                smallestIndx = i; 
            }
        }
        animations.push([currIndex,smallestIndx,"swap"]);
        animations.push([currIndex,smallestIndx,"colrevall"]);
        Helper(currIndex, smallestIndx, array);
        currIndex += 1;
    }
    return animations;
}