//var MusicList=[];
function loadmusic(){
	for( var i=0; i<MusicList.length; i++){
		music = MusicList[i].split('|');
		$(".MusicList .List").append('<div class="Single" ><span class="SongName"  fname="'+music[1]+'" pname="'+music[2]+'" >'+music[0]+'</span></div> ');
	}
}