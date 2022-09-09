window.BENCHMARK_DATA = {
  "lastUpdate": 1662753751038,
  "repoUrl": "https://github.com/Parallel-in-Time/pySDC",
  "entries": {
    "pySDC Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "pancetta@users.noreply.github.com",
            "name": "Robert Speck",
            "username": "pancetta"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f7c134da8379c014daecc16ba2ada6aa4ddda3f8",
          "message": "Update ci_pipeline.yml",
          "timestamp": "2022-09-09T21:29:51+02:00",
          "tree_id": "b6887952453481295543749ed86a84813a42d114",
          "url": "https://github.com/Parallel-in-Time/pySDC/commit/f7c134da8379c014daecc16ba2ada6aa4ddda3f8"
        },
        "date": 1662753751021,
        "tool": "pytest",
        "benches": [
          {
            "name": "pySDC/tests/test_benchmarks/test_PFASST_NumPy.py::test_B",
            "value": 0.1540942930053555,
            "unit": "iter/sec",
            "range": "stddev: 0.07454235396104912",
            "extra": "mean: 6.489533002790995 sec\nrounds: 5"
          },
          {
            "name": "pySDC/tests/test_benchmarks/test_collocation.py::test_benchmark_collocation",
            "value": 3.174907417590241,
            "unit": "iter/sec",
            "range": "stddev: 0.0018325952429769584",
            "extra": "mean: 314.9698143824935 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}