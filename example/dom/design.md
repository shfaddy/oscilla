# Dom Sound Design

## Sub Phone

```scenario oscilla

import sine

sine sub .

distance 0

pitch -20

sweep 40
shift 6

attack 5
decay 4
sustain 4
release 1

```

### Higher Sub

```scenario oscilla

--reproduce higher .

distance 1

pitch 20

length (1/2^2)

sweep 0
shift 3

attack 1
decay 1
release 1

```

## Snatch Phone

```scenario oscilla

~ dom .

import noise

noise snatch .

distance 0

pitch -10

sweep 60
shift 7

attack 5
decay 5
sustain 10
release 10

```

### Higher Snatch Phone

```scenario oscilla

--reproduce higher .

pitch 10
distance 1

```

#### Higher Snatch Phone

```scenario oscilla

--reproduce higher .

pitch 10
distance 2

```

## Body Phone

```scenario oscilla

~ dom .

import fm

fm body .

distance 1

pitch -20

FM -1

sweep 40
shift 6

attack 5
decay 4
sustain 8
release 3

```
