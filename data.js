window.BENCHMARK_DATA = {
  "lastUpdate": 1661243489386,
  "repoUrl": "https://github.com/Parallel-in-Time/pySDC",
  "entries": {
    "pySDC Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "r.speck@fz-juelich.de",
            "name": "Robert Speck",
            "username": "pancetta"
          },
          "committer": {
            "email": "r.speck@fz-juelich.de",
            "name": "Robert Speck",
            "username": "pancetta"
          },
          "distinct": true,
          "id": "0ef49f32abcf3c9a4c0d247796ccda5b3601cf74",
          "message": "Update ci_pipeline.yml",
          "timestamp": "2022-08-23T09:42:36+02:00",
          "tree_id": "a48db3b7cdf920c24b7e7bbb3a34ea90f1fb481c",
          "url": "https://github.com/Parallel-in-Time/pySDC/commit/0ef49f32abcf3c9a4c0d247796ccda5b3601cf74"
        },
        "date": 1661240689210,
        "tool": "pytest",
        "benches": [
          {
            "name": "pySDC/tests/test_benchmarks/test_PFASST_NumPy.py::test_B",
            "value": 0.21167337978813783,
            "unit": "iter/sec",
            "range": "stddev: 0.022566221264733698",
            "extra": "mean: 4.724259616400002 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "r.speck@fz-juelich.de",
            "name": "Robert Speck",
            "username": "pancetta"
          },
          "committer": {
            "email": "r.speck@fz-juelich.de",
            "name": "Robert Speck",
            "username": "pancetta"
          },
          "distinct": true,
          "id": "b231d379fc40c1aad8e987ecee98e6153df1b238",
          "message": "Update test_collocation.py",
          "timestamp": "2022-08-23T10:28:43+02:00",
          "tree_id": "6f91963a99246254e99a41d4bf5df582b97acf7b",
          "url": "https://github.com/Parallel-in-Time/pySDC/commit/b231d379fc40c1aad8e987ecee98e6153df1b238"
        },
        "date": 1661243488571,
        "tool": "pytest",
        "benches": [
          {
            "name": "pySDC/tests/test_benchmarks/test_PFASST_NumPy.py::test_B",
            "value": 0.13695165504375414,
            "unit": "iter/sec",
            "range": "stddev: 0.09568674000831431",
            "extra": "mean: 7.301846769799999 sec\nrounds: 5"
          },
          {
            "name": "pySDC/tests/test_benchmarks/test_collocation.py::test_benchmark_collocation",
            "value": 2.5313007475016147,
            "unit": "iter/sec",
            "range": "stddev: 0.009012727628669396",
            "extra": "mean: 395.0538081999923 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}