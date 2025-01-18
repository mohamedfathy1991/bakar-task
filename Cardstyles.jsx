 
export function Cardstyles({titleclass,data}) {
   
  console.log(data?.cardholderName);
  
  return (
    <>
    <div className="      bg-green-400  " >
      
     
      <div className=" mt-5 flex gap-2 items-center border border-[3px]  border-black ">
      <svg class="w-14 h-14 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
<path fill="none" d="M17.4 12.6h1l-.3-1.4v-.4l-.2.4-.5 1.4Z"/>
<path fill="currentColor" fill-rule="evenodd" d="M2 6.3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-12Zm12.5 3.2c.4 0 .8 0 1.1.2l-.1 1h-.1a2 2 0 0 0-1-.3c-.5 0-.7.3-.7.5s.2.3.7.5c.7.4 1 .8 1 1.3 0 1-.8 1.7-2.2 1.7-.6 0-1.1-.2-1.4-.3l.2-1h.1c.4.2.7.3 1.2.3.4 0 .8-.2.8-.5 0-.2-.2-.3-.7-.6-.5-.2-1.1-.6-1.1-1.3 0-.9 1-1.5 2.2-1.5Zm3.5 0h1l1 4.8h-1.2l-.2-.7H17l-.3.7h-1.3l1.9-4.4c.1-.3.3-.3.7-.3Zm-6.2 0h-1.3l-.8 4.8H11l.8-4.8Zm-4.5 3.3-.1-.7-.5-2.2c0-.3-.3-.3-.6-.4h-2v.1l1.2.5.1.2 1.1 4H8l2-4.7H8.7l-1.3 3.2Z" clip-rule="evenodd"/>
</svg>
<span className="text-2xl">
{data?.cardholderName}
</span>

      </div>
      

   
</div>
    
    
    </>

    
    
      
      
      
    
  )
}
