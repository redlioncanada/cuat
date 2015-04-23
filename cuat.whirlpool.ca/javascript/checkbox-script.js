// JavaScript Document
$(document).ready(function(){
		(function(){
			var jpanel = $('.column_sub');			
			$(".list-result").html("");scrollDiv();
			var removefilter = function(jid){
				var jresult = $('.list-result');
				var jfilter = jresult.find('.list-result-filter-'+ jid +'');
				jfilter.remove();
				var jbox = $('#'+jid);
				if(jbox.attr('checked')) jbox.attr('checked', false);
				scrollDiv();
			};
			var addfilter = function(label, jid){
				var jresult = $('.list-result');
				jresult.append('<div class="list-result-item list-result-filter-'+ jid +'">'+ label +'&nbsp;<span class="icon-filter-remove"><img src="'+tb_branch+'images/btn_close_green_circle.png" /></span></div>');
				
				
				jresult.find('.list-result-filter-'+ jid +'> .icon-filter-remove').click(function(){
					removefilter(jid);
				});
				scrollDiv();
			};
			
			var status_showline = 0;
			var tempID=0;
			jpanel.each(function(i){
				var jlist = $(this);
				var jboxes = jlist.find('input[type="checkbox"]');
				jboxes.each(function(j){
					var jbox = $(this);
					jbox.attr("checked",false);
					jbox.click(function(){
						var jid = jbox.attr('id')||jbox.attr("id","tempid"+tempID++).attr("id");
						var jlabel = jlist.find('label[for="'+ jid +'"]');
						var param = jlabel.text()||$(this).parent().parent().text();
						if(jbox.attr('checked'))
						{
							addfilter(param, jid);
							status_showline++;
						}
						else
						{
							removefilter(jid);
							status_showline--;
						}
						if(status_showline<=0){$(".list-clear").hide('fast');}
						else {$(".list-clear").show('fast');}
					});
				});
			});
		$("#clearBox").click(function(){
									  
									  
					$('.list-result').children().each(function(){
							removefilter($.trim($(this).attr("class").replace("list-result-item","")).replace(/list-result-filter-/,""));	   
															   });
					$(".list-clear").hide('fast');
					status_showline = 0;
									  });
		})();
		
	});