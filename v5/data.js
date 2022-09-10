window.BENCHMARK_DATA = {
  "lastUpdate": 1662801223113,
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
          "id": "ed0ca7defc86a4fecdae5a6dfe306ba2fc98591c",
          "message": "Update ci_pipeline.yml",
          "timestamp": "2022-09-10T11:07:43+02:00",
          "tree_id": "c3c19772d743504f3d63e638836ba01dafb4edbb",
          "url": "https://github.com/Parallel-in-Time/pySDC/commit/ed0ca7defc86a4fecdae5a6dfe306ba2fc98591c"
        },
        "date": 1662801222963,
        "tool": "pytest",
        "benches": [
          {
            "name": "pySDC/tests/test_benchmarks/test_PFASST_NumPy.py::test_B",
            "value": 0.20877328962008315,
            "unit": "iter/sec",
            "range": "stddev: 0.018748141857514732",
            "extra": "mean: 4.789884768400009 sec\nrounds: 5"
          },
          {
            "name": "pySDC/tests/test_benchmarks/test_collocation.py::test_benchmark_collocation",
            "value": 4.228204283010983,
            "unit": "iter/sec",
            "range": "stddev: 0.0009316639458479025",
            "extra": "mean: 236.50702119999778 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}