import ListItem, { Item } from "./ListItem";

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clear(): void
    add(item: ListItem): void,
    remove(id: string): void
}

export default class FullList implements List {

    // Patron Singleton
    static instance: FullList = new FullList();

    private constructor(private _list: ListItem[] = []){}

    get list(): ListItem[] {
        return this._list;
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList")

        // Type guard
        if (typeof storedList !== "string") return

        const parsedList: { _id: string, _item: string, _checked: boolean}[] 
            = JSON.parse(storedList)
        
        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
            FullList.instance.add(newListItem)
        })
    }

    save(): void {
        localStorage.setItem('myList', JSON.stringify(this._list))
    }

    clear(): void {
        this._list = []
        this.save()
    }
    
    add(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }

    remove(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }
    
}

