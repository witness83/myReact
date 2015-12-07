//
// Created by witness on 15/12/7.
// Copyright (c) 2015 witness. All rights reserved.
//

#import "NativeModule.h"


@implementation NativeModule
{

}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(nativeParam:(NSString *)firstName){
	NSLog(@"in natvieModule firstName is %@",firstName);
}

RCT_EXPORT_METHOD(callNative:(NSString *)name callback:(RCTResponseSenderBlock)callback){


	NSLog(@"in native in thread %@",[NSThread currentThread]);
	NSString *value = [NSString stringWithFormat:@"Hello %@",name];
	callback(@[[NSNull null],value]);
}

- (dispatch_queue_t)methodQueue
{
//	return dispatch_get_main_queue();
	return dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT,0);
}

@end