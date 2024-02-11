@echo off

rem Set Kaggle API credentials
set KAGGLE_USERNAME=emmanuelarmand
set KAGGLE_KEY=44bb7902eb07799ee192479b997cb23d

rem List of Kaggle datasets
set "datasets=dheerajperumandla/drowsiness-dataset rakibuleceruet/drowsiness-prediction-dataset talhabhatti7262/drivers-drowsiness-detection banudeep/nthuddd2 esrakavalci/sust-ddd farisalwasle/driver-drowsiness-for-cnn-algo"

rem Download each dataset
for %%d in (%datasets%) do (
    kaggle datasets download -d %%d --unzip
)
