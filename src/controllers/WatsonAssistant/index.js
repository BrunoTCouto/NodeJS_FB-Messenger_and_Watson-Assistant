import { assistant , workspace} from './config.js'
import { resolve } from 'url';

export const chat = async (text) => {
    return new Promise((resolve, reject) => {
        assistant.message({
            workspace_id: workspace,
            input: {text},
            headers: {},
            context:{}
          },  function(err, result, response) {
            if (err)
                reject(err)
            else
                resolve(result)
          });
    
    })
    
}
