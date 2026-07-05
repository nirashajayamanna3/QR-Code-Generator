document.getElementById('qr-form').addEventListener('submit',function(e){
   e.preventDefault();

   const id = document.getElementById('qr-id').value;
   const price = document.getElementById('qr-price').value;
   const data = {id , price};
})