window.BENCHMARK_DATA = {
  "lastUpdate": 1662751607307,
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
          "id": "ca20d05139eb9db82db6956b093c2614549f38de",
          "message": "Update ci_pipeline.yml",
          "timestamp": "2022-09-09T21:03:33+02:00",
          "tree_id": "69465c42e4894b9afd77e89f4be4d49105c5dc36",
          "url": "https://github.com/Parallel-in-Time/pySDC/commit/ca20d05139eb9db82db6956b093c2614549f38de"
        },
        "date": 1662751607289,
        "tool": "pytest",
        "benches": [
          {
            "name": "pySDC/tests/test_benchmarks/test_PFASST_NumPy.py::test_B",
            "value": 0.15977622330215133,
            "unit": "iter/sec",
            "range": "stddev: 0.018889163295347133",
            "extra": "mean: 6.258753519970924 sec\nrounds: 5"
          },
          {
            "name": "pySDC/tests/test_benchmarks/test_collocation.py::test_benchmark_collocation",
            "value": 3.248400381839205,
            "unit": "iter/sec",
            "range": "stddev: 0.0012856557891605773",
            "extra": "mean: 307.8438254073262 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}