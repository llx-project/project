/**
 * 批量生成redux异步 action type
 * @author cold <coldxuweb@163.com>
 * @since 2017/8/20
 */

class Types {
    constructor() {
        this.types = {};
    }

    /**
     * define type
     * @param {any} type 
     * @memberof Types
     */
    defineAsynType(type) {
        let status = ['SUCCESS', 'PENDING', 'FAIL'];
        this.types[type] = type;
        
        for (let key of status) {
            let newType = `${type}_${key}`;
            this.types[newType] = newType;
        }
    }

    /**
     * define 非异步 type
     * @param {any} type 
     * @memberof Types
     */
    defineType(type) {
        this.types[type] = type;
    }
}

export default new Types();
