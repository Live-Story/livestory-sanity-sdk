# Live Story Sanity SDK

<div align="center">
    <h1 align="center">Live Story SDK for Sanity CMS integration</h1>
    <p align="center">This is a suite of Live Story components for integrating with Sanity CMS on a Hydrogen storefronts</p>
</div>

## Installation

```sh
npm install livestory-sanity-sdk # yarn add livestory-sanity-sdk
```

#### Compatibility

| Version to install                                                                                                            | Support                                              |
| ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Latest livestory-sanity-sdk                                                                                                    | Storefront for modern browsers + Studio for Node 16+                           |

## How to use it

For full usage example, refer to the [Live Sanity Demo Commerce](https://livestory.nyc/eu/documentation/)

### Hydrogen Storefront module

```javascript
// 1. Import the LiveStory Storefront
import LiveStorySanity from "livestory-sanity-sdk";

// use it in your React components as the following
<LiveStorySanity.Storefront.LiveStory value={page.liveStory} language={language} store={store} />
```
```javascript
// 2. Import single components from Storefront module
import { LiveStoryStoryModule } from "livestory-sanity-sdk/storefront";

import { LiveStory } from "livestory-sanity-sdk/storefront";
```

### Sanity Studio module

#### Add Live Story document and objects to you Sanity Studio config

```javascript
// Document type
import { LiveStoryDocument as livestory } from 'livestory-sanity-sdk/studio'

const documents = [..., livestory]

// Object type
import { LiveStoryObject as liveStoryBlock } from 'livestory-sanity-sdk/studio'

import { LiveStoryModuleStudio as moduleLiveStory } from 'livestory-sanity-sdk/studio'

const objects = [
  ...
  liveStoryBlock,
  moduleLiveStory
]
```
