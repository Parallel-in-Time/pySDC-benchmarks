window.BENCHMARK_DATA = {
  "lastUpdate": 1662749717725,
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
          "id": "aa87f97700736493ee9647810b132ccc29106762",
          "message": "Update ci_pipeline.yml",
          "timestamp": "2022-09-09T20:23:21+02:00",
          "tree_id": "4935b421dc9530de5ad4140da8cdd9038b5c2f2f",
          "url": "https://github.com/Parallel-in-Time/pySDC/commit/aa87f97700736493ee9647810b132ccc29106762"
        },
        "date": 1662749717705,
        "tool": "pytest",
        "benches": [
          {
            "name": "pySDC/tests/test_benchmarks/test_PFASST_NumPy.py::test_B",
            "value": 0.21128406302262645,
            "unit": "iter/sec",
            "range": "stddev: 0.020749528925844005",
            "extra": "mean: 4.732964643400055 sec\nrounds: 5"
          },
          {
            "name": "pySDC/tests/test_benchmarks/test_collocation.py::test_benchmark_collocation",
            "value": 4.321213812781391,
            "unit": "iter/sec",
            "range": "stddev: 0.000947494751337444",
            "extra": "mean: 231.41645919999974 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}