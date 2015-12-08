//
// Created by witness on 15/11/26.
// Copyright (c) 2015 witness. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "RCTView.h"

@class MyReactNativeViewManager;
@class MyReactNativeView;
@class RCTEventDispatcher;

@protocol MyReactNativeViewDelegate
- (void) startSendEvent:(MyReactNativeView *)view;
@end

@interface MyReactNativeView : UIView

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher;

- (void)setPassValue:(id)json;
@end