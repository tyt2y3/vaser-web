/*
(function()
{	//init
	var tips_list = document.getElementsByClassName('box_tips');
	for ( var i=0; i<tips_list.length; i++)
	{
		var a_list = tips_list[i].getElementsByTagName('a');
		if ( a_list.length > 0)
		{
			var instr = a_list[0].innerHTML;
			if ( instr.length==4)
				if ( instr=='hide')
					box_tips_switchsize( a_list[0]);
		}
	}
}());*/
function box_tips_switchsize(obj)
{
	if ( obj.innerHTML=='show')
	{	//show the box tips
		obj.parentNode.style.height='auto';
		obj.innerHTML='hide';
	}
	else
	{	//hide it
		obj.parentNode.style.height='140px';
		obj.innerHTML='show';
	}
}
//google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-37320960-7', 'tyt2y3.github.io');
ga('send', 'pageview');
//disqus
setTimeout(function()
{
var disqus_shortname = 'vaser';
(function() {
	var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
	dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
	(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
},500);
