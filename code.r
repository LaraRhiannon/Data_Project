
library(tidyverse)
library(lubridate)



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
londondata %>%
    mutate(seconds = period_to_seconds(hms(Finish)))


#Get String function
getstr = function(mystring, initial.character, final.character)
{ # check that all 3 inputs are character variables
    if (!is.character(mystring))
    {        stop('The parent string must be a character variable.')
    }
    
    if (!is.character(initial.character))
    {        stop('The initial character must be a character variable.')
    }
    if (!is.character(final.character))
    {stop('The final character must be a character variable.')
    }
    # pre-allocate a vector to store the extracted strings
    snippet = rep(0, length(mystring))
    for (i in 1:length(mystring))
    {
        # extract the initial position
        initial.position = gregexpr(initial.character, mystring[i])[[1]][1] + 1       
        # extract the final position
        final.position = gregexpr(final.character, mystring[i])[[1]][1] - 1      
        # extract the substring between the initial and final positions, inclusively
        snippet[i] = substr(mystring[i], initial.position, final.position)
    } 
    return(snippet)
}


#Extract the country codes into a new column
df <- df %>%
  mutate(Country = getstr(df$Name, '[(]', '[)]'))

#Add categories per time
df.categorise <- df %>%
  mutate(timecat = ifelse(seconds %in% 8000:9000, "2:15-2:30",
                          ifelse(seconds %in% 9001:9900, "2:30-2:45",
                          ifelse(seconds %in% 9901:10800, "2:45-3:00",
                          ifelse(seconds %in% 10801:11700, "3:00-3:15",
                          ifelse(seconds %in% 11701:12600, "3:15-3:30",
                          ifelse(seconds %in% 12601:13500, "3:30-3:45",
                          ifelse(seconds %in% 13501:14400, "3:45-4:00",
                          ifelse(seconds %in% 14401:15300, "4:00-4:15",
                          ifelse(seconds %in% 15301:16200, "4:15-4:30",
                          ifelse(seconds %in% 16201:17100, "4:30-4:45",
                          ifelse(seconds %in% 17101:18000, "4:45-5:00",
                          ifelse(seconds %in% 18001:18900, "5:00-5:15",
                          ifelse(seconds %in% 18901:19800, "5:15-5:30",
                          ifelse(seconds %in% 19801:20700, "5:30-5:45",
                          ifelse(seconds %in% 20701:21600, "5:45-6:00",
                          ifelse(seconds %in% 21601:22500, "6:00-6:15",
                          ifelse(seconds %in% 22501:23400, "6:15-6:30",
                          ifelse(seconds %in% 23401:24300, "6:30-6:45",
                          ifelse(seconds %in% 24301:25200, "6:45-7:00",
                          ifelse(seconds %in% 25201:26100, "7:00-7:15",
                          ifelse(seconds %in% 26101:27000, "7:15-7:30",
                          ifelse(seconds %in% 27001:27900, "7:30-7:45",
                          ifelse(seconds %in% 27901:28800, "7:45-8:00",
                          ifelse(seconds %in% 28801:29700, "8:00-8:15",
                          ifelse(seconds %in% 29701:30600, "8:15-8:30",
                          ifelse(seconds %in% 30601:31500, "8:30-8:45",
                          ifelse(seconds %in% 31501:32400, "8:45-9:00","9:00+" ))))))))))))))))))))))))))))

#ANALYSIS EXAMPLE

medianAge <- df %>%
  group_by(Category) %>%
  summarise(avg = median(seconds))
#round the seconds to an integer
medianAge <- medianAge %>%
  mutate(time = round(avg))
#turn seconds back into %H %M %S
medianAge <- medianAge %>%
  mutate(Time = seconds_to_period(time))

#COUNTRY 

countryCodes <- read_csv("country-codes.csv")
df <- df %>%
   mutate(Country = getstr(df$Name, '[(]', '[)]'))
#group by country and get average
medianCountry <- df %>%
   group_by(Country) %>%
   summarise(avg = median(seconds))
medianCountry <- medianCountry %>%
   mutate(time = round(avg))
medianCountry <- medianCountry %>%
  mutate(Time = seconds_to_period(time))
medianCountry$tally <- df %>% group_by(Country) %>% tally()

#merge with country codes
countryCodes <- countryCodes %>%
   select(official_name_en, `ISO3166-1-Alpha-3`)
 names(countryCodes) <- c("name", "Country")
 CountryMerge <- merge(medianCountry, countryCodes, by="Country")
 View(CountryMerge)

