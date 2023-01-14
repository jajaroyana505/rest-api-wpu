function searchMovie() {
   $('#movie-list').html('')

   $.ajax({
      url : 'http://www.omdbapi.com',
      type : 'get',
      dataType : 'json',
      data : {
         'apikey' : '68cf7949',
         's' : $('#search-input').val()
      },
      success: (result)=>{
         // console.log(result)
         if(result.Response == 'True'){
            var movies = result.Search

            $.each(movies, (i,movie)=>{
               $('#movie-list').append(`
               <div class="col-md-3 mb-5">
               <div class="card">
                  <img src="`+movie.Poster+`" class="card-img-top" alt="...">
                  <div class="card-body">
                     <h5 class"card-title">`+movie.Title+`</h5>
                     <p class="card-text">Tahun : `+movie.Year+`</p>
                    
                     <a href="#" data-id="`+movie.imdbID+`"  class="card-link see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal">see detail;</a>
                  </div>
               </div>
               </div>
               `)
            })

            $('#search-input').val('')

         }else{
            $('#movie-list').html('<h1 class="text-center " style="color:red;">Film Tidak ditemukan</h1>')
         }
      }
   })

}


$('#search-button').on('click', ()=>{
   
   searchMovie()

})

$('#search-input').on('keyup', (e) =>{
   if(e.keyCode === 13){
      searchMovie( )
   }

})

$('#movie-list').on('click','.see-detail', function(){
   console.log($(this).data('id')) 
   $.ajax({
      url : 'http://www.omdbapi.com',
      type : 'get',
      dataType : 'json',
      data : {
         'apikey' : '68cf7949',
         'i' : $(this).data('id')
      },
      success: (result)=>{
         console.log(result)
         console.log(result.Title)
         console.log(result.Actors)
         // console.log(result.Ratings[1].Value)

         $('.modal-body').html(`
         <div class="card mb-3" >
            <div class="row g-0">
            <div class="col-md-4">
               <img src="`+result.Poster+`" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
               <div class="card-body">
               <div class="card" >
                  <div class="card-footer">
                     `+result.Title+`
                  </div>
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item">`+result.Plot+`</li>
                  <li class="list-group-item">Actors`+result.Actors+`</li>
                  <li class="list-group-item">Genre`+result.Genre+`</li>
                  </ul>
               </div>
               </div>
            </div>
            </div>
         </div>
               `)
        
      }

   })
})