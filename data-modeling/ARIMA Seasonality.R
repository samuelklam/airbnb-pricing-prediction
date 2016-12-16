#CS 109 Final Project: Seasonality
library("TTR")
library("forecast")

dataset= read.csv(file="../datasets/daily_price.csv",header=True,sep=",")
pt = as.ts(dataset)
plot(pt, main= "Average Price of All Listings Over Time")
pricecomponents= decompose(pt)
diff1= diff(pt, differences=1)
plot(diff1, main="Average Price with 1 Difference")
acf(diff1, lag.max=20, main= "ACF of Average Price")
pacf(diff1, lag.max=20, main= "PACF of Average Price")
auto.arima(diff1)
