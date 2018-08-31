export const changeItemAtIndex = <ItemType>(array: ItemType[], index: number, newItem: ItemType) => {
    const elementsBeforeItem = array.slice(0, index)
    const elementsAfterItem = array.slice(index + 1)
    return [
        ...elementsBeforeItem,
        newItem,
        ...elementsAfterItem
    ]
}