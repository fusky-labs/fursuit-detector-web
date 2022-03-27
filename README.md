
<h1 align="center">Fursuit Detector</h1>

Detects fursuit pictures via PyTorch! (Video support coming soon on a diffrent up coming repo)

<p align="center">
  <a href="https://youtu.be/hx_wx0s2dUE">
    <img src="https://github.com/OpenFurs/Fursuit-Detector/blob/main/fursuit-detection-demo.gif?raw=true">
  </a>
</p>

- **Full video:** [Fursuit detection AI version 1.0](https://youtu.be/hx_wx0s2dUE)
- **Original video used to test the model:** [Furrydelphia 2019 Fursuit Parade](https://youtu.be/U3ieglNOiQg)

## Technologies used


<img src="https://skillicons.dev/icons?i=nextjs" width="30">&nbsp;<img src="https://skillicons.dev/icons?i=ts" width="30">&nbsp;<img src="https://skillicons.dev/icons?i=py" width="30">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" width="25">&nbsp;<img src="https://raw.githubusercontent.com/github/explore/main/topics/flask/flask.png" width="30">

Created using Next.js + TypeScript for the front-end -- while Flask
and PyTorch for the back-end, API, and AI stuff.

## Project structure

- `client` - Next.js app
- `tool` - AI stuff required to detect pictures

## Get it up and running

> You'll need an up-to-date version of both Node and Python to properly
> get it up and running.

Fork and clone the repo, instead of installing Node and Python libraries yourselve, we have a Bash script set up for you! Just simply run:

```sh
sh install.sh
```

The bash script installs the Python packages first in the `requirements.txt`
file, then installs Next.js dependencies next.

There is not an easy solution to run both servers in one, instead:
```sh
# Run the local Next.js server
npm --prefix ./client run dev

# or via yarn
yarn --cwd ./client run dev

# Then run the back-end Python server
py server-api.py
```

It doesn't matter if you start the Python server then Next.js, or vice versa;
as long as both servers are up and running, you're good to go!

----
<small><b>© 2021-22, created by thatITfox & skepfusky, MIT license</b></small>
