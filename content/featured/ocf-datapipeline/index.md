---
date: '1'
title: 'OpenClimateFix Weather Pipeline'
cover: './cover.jpg'
external: 'https://openclimatefix.org/'
github: 'https://github.com/openclimatefix'
cta: ''
tech:
  - Python
  - Apache Airflow
  - PyTorch
  - Graph Neural Networks
  - Apache Kafka
---

OpenClimateFix builds open-source ML for solar power forecasting, and better forecasts mean grid operators burn less gas covering for cloudy afternoons. I contribute to the weather side of that.

My patches live in three places: validation pipelines in Airflow that keep bad sensor data out of training, anomaly detection that flags suspicious readings before they poison a model, and distributed-training work that makes the GNN forecasting models cheaper to iterate on.
