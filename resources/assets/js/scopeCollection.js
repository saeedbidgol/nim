
class scopeCollection {
    constructor(collection) {
        let items = [];
        if (
            collection !== undefined &&
            !Array.isArray(collection) &&
            typeof collection !== "object"
        ) {
            items = [collection];
        } else if (collection instanceof this.constructor) {
            items = collection.all();
        } else {
            items = collection || [];
        }
        this.$collection = collect(items);
    }

    scopeWhere(key, operator = "=", value) {
        if (value == undefined) value = operator;
        if (!value) return this;
        console.log('this',this)
        return this.$collection.where(key, operator, value);
    }
}

export default scopeCollection;
