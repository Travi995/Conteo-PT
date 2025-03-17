/**
 * 
 * @param pass 
 */
export const vrifyPass = (pass:string,hashPass:string ):boolean=>{
     const data =  atob(hashPass)
     if(data === pass){
        return true
     }else{
        return false
     }

}