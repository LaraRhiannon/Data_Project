baseurl <- 'http://results-2017.virginmoneylondonmarathon.com/2017/?&event=MAS&num_results=1000&pid=search&search%5Bsex%5D=%25&search%5Bnation%5D=%25&search_sort=name'     
#create list of paginated results     
pagenum <- "&page=" 
pagelist <- list()

resultspage <- 0 
repeat { url <- paste(baseurl, pagenum, resultspage, sep = "") 
pagelist <- c(pagelist, url) 
resultspage = (resultspage + 1) 
if (resultspage == 47) break } 
pagelist



