import * as Guard from "./guards";
import * as TypeExtensions from "./type.extensions";

export type LinkedListItem = {
  id: string;
  nextItemId: string | null;
  previousItemId: string | null;
};

export function Sort(linkedList: LinkedListItem[]) {
  Guard.isArrayOf(linkedList);
  if (!linkedList.length) {
    return [];
  }

  const sortedList: LinkedListItem[] = [];
  const nextItemMap = new Map<string, number>();
  let currentId: string | null = null;

  for (var itemIndex = 0; itemIndex < linkedList.length; itemIndex++) {
    var item = linkedList[itemIndex];
    if (item.previousItemId === null) {
      // First item in the linked list
      currentId = item.id;
      sortedList.push(item);
    } else {
      nextItemMap.set(item.previousItemId, itemIndex);
    }
  }

  if (TypeExtensions.isNullOrUndefined(currentId)) {
    return [];
  }

  while (sortedList.length < linkedList.length) {
    // get the item with a previous item ID referencing the current item
    const nextItemIndex = nextItemMap.get(currentId);
    Guard.isDefined(nextItemIndex);
    var nextItem = linkedList[nextItemIndex];
    sortedList.push(nextItem);
    currentId = nextItem.id;
  }

  return sortedList;
}
