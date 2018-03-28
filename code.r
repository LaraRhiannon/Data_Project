
library(chron)



#create a list of paginated urls
baseurl <- 'http://results-2017.virginmoneylondonmarathon.com/2017/?&event=MAS&num_results=1000&pid=search&search%5Bsex%5D=%25&search%5Bnation%5D=%25&search_sort=name'     
pagenum <- "&page=" 
pagelist <- list()

resultspage <- 0 
repeat { url <- paste(baseurl, pagenum, resultspage, sep = "") 
pagelist <- c(pagelist, url) 
resultspage = (resultspage + 1) 
if (resultspage == 47) break } 
pagelist

foo <- list()
i <- 1
#scrapes the data from the list of urls
for (page in pagelist){ 
  dataTable <- page %>%
    read_html() %>%
    html_nodes(xpath='/html/body/div[2]/div[2]/div/div/div[3]/div[5]/div[1]/table') %>%
    html_table
  print(dataTable)
  
  foo[[i]] <- dataTable
  i <- i + 1
}
#returns a list of dataframes
View(foo)
#stacks all the dataframes into one large dataframe
largeFoo <- bind_rows(
  foo[[1]][[1]], 
  foo[[2]][[1]], 
  foo[[3]][[1]],
  foo[[4]][[1]],
  foo[[5]][[1]],
  foo[[6]][[1]],
  foo[[7]][[1]],
  foo[[8]][[1]],
  foo[[9]][[1]],
  foo[[10]][[1]],
  foo[[11]][[1]],
  foo[[12]][[1]],
  foo[[13]][[1]],
  foo[[14]][[1]], 
  foo[[15]][[1]],
  foo[[16]][[1]],
  foo[[17]][[1]],
  foo[[18]][[1]],
  foo[[19]][[1]],
  foo[[20]][[1]],
  foo[[21]][[1]],
  foo[[22]][[1]],
  foo[[23]][[1]],
  foo[[24]][[1]], 
  foo[[25]][[1]],
  foo[[26]][[1]],
  foo[[27]][[1]],
  foo[[28]][[1]],
  foo[[29]][[1]],
  foo[[30]][[1]],
  foo[[31]][[1]],
  foo[[32]][[1]],
  foo[[33]][[1]],
  foo[[34]][[1]], 
  foo[[35]][[1]],
  foo[[36]][[1]],
  foo[[37]][[1]],
  foo[[38]][[1]],
  foo[[39]][[1]],
  foo[[40]][[1]],
  foo[[41]][[1]],
  foo[[42]][[1]],
  foo[[43]][[1]],
  foo[[44]][[1]],
  foo[[45]][[1]],
  foo[[46]][[1]],
  foo[[47]][[1]])

#export data as csv
write_csv(largeFoo,"londonData.csv")

#remove extra columns
data <- largeFoo[ , !duplicated(colnames(largeFoo))]
#clean it up 
data.clean <- data %>%
  select(`Place overall`, Name, Club, Category, Finish)

data.cleaner <- na.omit(data.clean)
#rename the dataframe
londondata <- data.cleaner


#convert hours into numeric data





