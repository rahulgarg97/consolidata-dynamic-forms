
export default class Utility {

    static collectFormInputs = (submitEvent) => {
        let data = {};
        let i = 0;
        while(submitEvent.target.length > i){
            if(submitEvent.target[i].type !== 'submit'){
                data[submitEvent.target[i].name] = submitEvent.target[i].value;
            }
            i++;
        }
        return data;
    }

    static isJsonValid = str => {
        try{
            JSON.parse(str);
        }catch(err){
            return false;
        }
        return true;
    }

}